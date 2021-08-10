<?php

namespace App\Http\Controllers\Settings;

use App\Http\Controllers\Controller;
use Inertia\Inertia;

class ShowSettingsController extends Controller
{
    public function __invoke()
    {
        return Inertia::render('Settings/ShowSettings', [
            'meta' => ['title' => 'Settings'],
        ]);
    }
}
