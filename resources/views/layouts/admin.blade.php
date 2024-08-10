<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Dashboard</title>
    @vite('resources/css/app.css')
</head>

<body>
    <div class="flex h-screen bg-gray-100">
        <!-- Sidebar -->
        <aside class="w-64 bg-white shadow-md">
            <div class="p-4">
                <h1 class="text-xl font-bold mb-4">Admin Dashboard</h1>
                <ul class="space-y-2">
                    <li>
                        <a href="{{ route('dashboard') }}"
                            class="block py-2 px-4 rounded-lg text-gray-700 hover:bg-gray-200">
                            Dashboard
                        </a>
                    </li>
                    <li>
                        <a href="{{ route('articles.index') }}"
                            class="block py-2 px-4 rounded-lg text-gray-700 hover:bg-gray-200">
                            Articles
                        </a>
                    </li>
                    <li>
                        <a href="#" class="block py-2 px-4 rounded-lg text-gray-700 hover:bg-gray-200">
                            Users
                        </a>
                    </li>
                    <li>
                        <!-- Logout Form -->
                        <form action="{{ url('logout') }}" method="POST" class="inline">
                            @csrf
                            @method('POST')
                            <button type="submit" class="block py-2 px-4 rounded-lg text-gray-700 hover:bg-gray-200">
                                Logout
                            </button>
                        </form>
                    </li>
                </ul>
            </div>
        </aside>

        <!-- Main Content -->
        <main class="flex-1 p-6">
            @yield('content')
        </main>
    </div>
</body>

</html>
