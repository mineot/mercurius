<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Config;
use Symfony\Component\HttpFoundation\Response;

class DetectBrowserLocale
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $supportedLocales = Config::get('app.supported_locales'); // ← aqui!
        $preferred = $request->getPreferredLanguage($supportedLocales);
        $locale = $preferred ?? 'en';
        App::setLocale($locale);
        return $next($request);
    }
}
