<?php

namespace App\Api\V1\Controllers;

use Symfony\Component\HttpKernel\Exception\HttpException;
use Tymon\JWTAuth\JWTAuth;
use App\Http\Controllers\Controller;
use Tymon\JWTAuth\Exceptions\JWTException;
use Symfony\Component\HttpKernel\Exception\AccessDeniedHttpException;
use Auth;
use Illuminate\Http\Request;
use App\Groupe;
use App\Groupe_member;
use App\User;
use App\post;
use App\Comment;
use Response;

class GroupeController extends Controller
{


    public function data(){
        $Grp = Groupe :: all();
        return Response::json(
          $Grp->load('users')->toArray()
        ,
            200
        ); 
      }

      public function dataGrp($prefix){
        $Grp = Groupe :: where('prefix',$prefix)->first();
        return Response::json(
          $Grp->load('users')->load('groupmember')->load('posts')->toArray()
        ,
            200
        ); 
      }

      public function dataGrpmembers($grpid){
        $Grp = Groupe_member ::where('groupe_id',$grpid) ->get();
           return Response::json(
          $Grp->load('users')->toArray()
        ,
            200
        ); 
     
      }
   

      public function Grpposts ($grpid){
        $post =post ::where('group_id',$grpid)->get();
        return Response::json(
          $post->load('grp','comments')->toArray()
        ,200);
           

      }

      


      public function addcomment(Request $request)
      {
        $customer = new Comment;
        $customer->content = $request->input('content');
        $customer->posts_id = $request->input('postid');
        $customer->user_id = $request->input('userid');
        
        $customer->save();

        return response()->json([
          'success' =>  $request->all(),
          'message' => 'Comment has been Added to the Post'
      ], 200);
      }

      public function insertpost(Request $request)
      {
        $customer = new post;
        $customer->text = $request->input('content');
        $customer->group_id = $request->input('group');
        $customer->save();

        return response()->json([
          'success' =>  true,
          'message' => 'Post has been Added to the Database  '
      ], 200);

      }


      public function destorymember($id)
      {
        $Grp = Groupe_member ::find($id);
        $Grp->delete();
        return response()->json("null", 200);

      }


      public function destroypost($id){
        $Grp = post ::find($id);
        $Grp->delete();
        return response()->json("null", 200);
        
      }

      public function destroycomments($id){
        $Grp = Comment ::find($id);
        $Grp->delete();
        return response()->json("null", 200);
        
      }
   
    public function insert(Request $request)
    {

        $customer = new Groupe;
        $customer->title = $request->input('title');
        $customer->prefix = $request->input('prefix');
        $customer->Descrption = $request->input('Descrption');
        $customer->user_id = $request->input('user_id');
        $customer->save();

          
        return response()->json([
            'success' =>  $customer,
            'message' => 'Group has been Added to the Database  '
        ], 200);
    
    }

    public function getusername($id)
    {
      $u = User ::find($id);
    
      return response()->json([ $u->name], 200);
    }

    public function insertmember(Request $request)
    {

        $uu = User:: where('email',$request->input('regcode'))->first();
        $check = Groupe_member::where('user_id',$uu->id)->where('groupe_id',$request->input('Grp'))->first();
        if ($check)
        {
          return response()->json( $check->all(),404);
        }
        else
        {

     $customer = new Groupe_member;
        $customer->user_id = $uu->id;
        $customer->groupe_id = $request->input('Grp');
        $customer->save();

          
        return response()->json([
            'success' =>   "yes",
           
        ], 200);
      }  
    }

}
