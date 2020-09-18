<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\User;
use App\Groupe_member;
use App\post;

class Groupe extends Model
{
    //
    protected $table = 'groupes';

    public function users()
    {
        return $this->belongsTo('App\User','user_id','id');
    }

    public function groupmember()
    {
        return $this->hasmany(Groupe_member::class);
    }

    public function posts()
    {
        return $this->hasmany(post::class,'group_id');
    }


}
