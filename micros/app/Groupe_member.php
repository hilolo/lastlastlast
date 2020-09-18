<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\User;

class Groupe_member extends Model
{
      //
      protected $table = 'groupe_members';

      public function users()
      {
          return $this->belongsTo('App\User','user_id','id');
      }
}
