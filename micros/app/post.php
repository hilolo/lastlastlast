<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Groupe;
use App\post;
use App\Comment;

class post extends Model
{
    protected $table = 'posts';

    public function grp()
    {
        return $this->belongsTo('App\Groupe','group_id','id');
    }

    public function comments()
    {
        return $this->hasmany(Comment::class,'posts_id');
    }



 

    


}
