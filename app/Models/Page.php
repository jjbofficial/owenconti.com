<?php

namespace App\Models;

use ArchTech\Pages\Page as BasePage;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Schema\Blueprint;

class Page extends BasePage
{
    public static function schema(Blueprint $table)
    {
        $table->string('slug');
        $table->string('title');
        $table->longText('content');
        $table->text('excerpt')->nullable();
        $table->string('type');
        $table->string('video')->nullable();
        $table->string('category_slug')->nullable();
    }

    public function getUrlAttribute()
    {
        return url($this->slug);
    }

    public function scopePosts(Builder $query)
    {
        $query->where('type', 'post');
    }

    public function category()
    {
        return $this->belongsTo(Category::class, 'category_slug');
    }
}
