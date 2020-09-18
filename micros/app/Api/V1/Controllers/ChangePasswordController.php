<?php
namespace App\Api\V1\Controllers;
use Illuminate\Http\Request;
use App\Http\Requests\ChangePasswordRequest;
use Illuminate\Support\Facades\DB;
use Symfony\Component\HttpFoundation\Response;
use App\Http\Controllers\Controller;
use App\User;;

class ChangePasswordController extends Controller
{
    public function process(Request $request)
    {
       
      
       return $this->getPasswordResetTableRow($request)->count() > 0 ? $this->changePassword($request) : $this->tokenNotFoundResponse();
    }

    private function getPasswordResetTableRow($request)
    {
      return DB::table('password_resets')->where('email', $request->Card)->where('token',$request->resetToken);

    }

    private function tokenNotFoundResponse()
    {
        return response()->json(['error' => 'Token or Email is incorrect'],Response::HTTP_UNPROCESSABLE_ENTITY);
    }

    private function changePassword($request)
    {
       $user = User::where('email',$request->Card)->first();
        $user->update(['password'=>$request->password]);
        $this->getPasswordResetTableRow($request)->delete();
        return response()->json(['data'=>'Password Successfully Changed'],Response::HTTP_CREATED);
    }
}