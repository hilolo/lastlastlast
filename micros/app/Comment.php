<?php

namespace App;
use App\User;
use App\post;

use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    protected $table = 'comments';
    public function post()
    {
        return $this->belongsTo(post::class);
    }

}
