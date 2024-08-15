<!DOCTYPE html>
<html lang="id">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard Admin Tajuk</title>
    @vite('resources/css/app.css')
    <style>
        /* Floating Sidebar */
        .floating-sidebar {
            position: fixed;
            top: 20px;
            left: 20px;
            width: 250px;
            background-color: #191919;
            /* bg-slate-900 */
            border-radius: 12px;
            padding: 15px;
            z-index: 1000;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            height: calc(100vh - 40px);
            /* Adjusting height to fit the screen */
        }

        .sidebar-header {
            padding: 20px;
            display: flex;
            align-items: center;
        }

        .sidebar-header img {
            height: 50px;
            margin-right: 15px;
        }

        .sidebar-menu {
            margin-top: 20px;
        }

        .sidebar-menu a {
            display: block;
            padding: 12px 15px;
            margin-bottom: 10px;
            border-radius: 8px;
            color: #E2E8F0;
            /* text-gray-300 */
            text-decoration: none;
            font-weight: 500;
            transition: all 0.3s ease;
        }

        .sidebar-menu a:hover {
            background-color: #4B5563;
            /* bg-gray-600 */
            /*   */
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        }

        .sidebar-menu a.active {
            background-color: #008859;
            /* bg-green-500 */
            color: white;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        }

        /* Logout Button */
        .logout-btn {
            display: flex;
            align-items: center;
            padding: 12px 15px;
            border-radius: 8px;
            color: #E2E8F0;
            /* text-gray-300 */
            text-decoration: none;
            font-weight: 500;
            transition: all 0.3s ease;
            cursor: pointer;
            margin-top: auto;
        }

        .logout-btn:hover {
            background-color: #EF4444;
            /* bg-red-500 */
            color: white;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        }

        /* Floating Content */
        .floating-content {
            margin-left: 300px;
            margin-top: 20px;
            padding: 20px;
            background-color: #e5e7eb;
            /* bg-gray-200 */
            border-radius: 12px;
        }

        .container {
            background-color: #e5e7eb;
            /* bg-gray-300 */
            padding: 20px;
        }
    </style>
</head>

<body class="container">
    <div class="floating-sidebar">
        <div>
            <div class="sidebar-header">
                <!-- Logo Tajuk -->
                <img src="{{ asset('/Logo.png') }}" alt="Logo Tajuk">
            </div>

            <div class="sidebar-menu">
                <a href="{{ route('dashboard') }}" class="{{ request()->routeIs('dashboard') ? 'active' : '' }}">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline-block mr-2" fill="none"
                        viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 12l3 3l6 -6l4 4l5 -5"></path>
                    </svg>
                    Dashboard
                </a>
                <a href="{{ route('articles.index') }}"
                    class="{{ request()->routeIs('articles.index') ? 'active' : '' }}">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline-block mr-2" fill="none"
                        viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M7 8h10M7 12h4m-4 4h6"></path>
                    </svg>
                    Artikel
                </a>
                <a href="#" class="{{ request()->routeIs('user.profile') ? 'active' : '' }}">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline-block mr-2" fill="none"
                        viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                    </svg>
                    User
                </a>
            </div>
        </div>

        <!-- Logout Button -->
        <form action="{{ route('logout') }}" method="POST">
            @csrf
            <button type="submit" class="logout-btn">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4 -4l-4 -4"></path>
                    <path d="M4 9V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4"></path>
                    <path d="M10 13v5a2 2 0 0 0 2 2h4"></path>
                </svg>
                Keluar
            </button>
        </form>
    </div>

    <!-- Konten Utama -->
    <main class="floating-content">
        @yield('content')
    </main>

    @yield('scripts')
</body>

</html>
