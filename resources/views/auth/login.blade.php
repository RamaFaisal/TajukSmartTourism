<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Dashboard</title>
    @vite('resources/css/app.css')
</head>

<body>
    <!-- component -->
    <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet">
    <div class="bg-no-repeat bg-cover bg-center relative"
        style="background-image: url(https://lh3.googleusercontent.com/pw/AP1GczOZ56V9lvhr7SX7PDTr5PiNRWPQtbEejtaZo5oKDMWf7ZG1r2PjVedXorox0PAFPhgDa1kTfGZ02-0pgIX_nQUqG3dQzHj2_4sfjE7SlosnNHz1ENpxac8pK5NOJyoDP5gvlMANDOjyUIxkDjhCJ21Z5SjQQ5CxDd00PwtpjOmEgtLuI_QuYVO0N2RKpTAtqzZYVU_sEM5boNOOXZBdocXPkzvsW_EHJrQpY9mFckj5_dey4mFsSICmq9q9XEecD9a9Hff35znGLa0s3E4Kj5sH0Idnp3-80xGTSHTVMi7eT2xq9ySWeHaZS3fP1LBVj5ttd9eLaKCeY_DySM_bwZnKEWXfDWyk3mCRycuJy8mGiQxUaW2YCwVbglzvlzezHZe3bF64SINr-SRsGLZMw9lz_gCkUMTrCAmlc-28Bo_3qCDD9SOShRNHKMwNm02FYwRePpPUyYCYkG4Ll_6DT5MoDl3bD9oMxr7XBreM18hDLKt4HtXtzgQyI-dwvyjJ2TfzPzXdRxXdRtG4Yz7oJqudcwCyYVTeXKDi8TNRAFQIlbkHgreZSVH-aA9cD4-E_Bj2s0gR-Hilkgyeq2WJa3RN7erlRNtgKDdE9yFoSso7BsIKdNO1QSRvp-ekBgQt9n2Qs3RvlnGYCtkRtwXNH-Go6KnLttEsgTakWxzcmLzAE0UXSOJx8h0PpSjNa71C57-6omg0XgcNkeruUiVwt65MIq5M_n-urEpKjQSCFDaZ3ES025Dc0UjPokM4QqDZpbv69Fa4c5qfcoqvltb5GiqIrlapev4SdMkx7S5zaJ3hrFdPwZqA7JiLN70TcghrmGqtpINouaF8iHf5u6_oHIST-QOtRDXQVpLZ8enfoDln-YRIvMT9tdOdKSrzrGPTLTLVJZro4y5-_6kABS4lkNgm-a7EqIlo0cGipzRlvWNgLEH8NsxcGmL3lT9RyV6W-jJU_Q5B4-yZPRozhCWRhk250eQpCKtU=w2880-h1616-s-no?authuser=0);">
        <div class="absolute bg-gradient-to-b from-green-500 to-green-400 opacity-75 inset-0 z-0"></div>
        <div class="min-h-screen sm:flex sm:flex-row mx-0 justify-center">
            <div class="flex justify-center self-center  z-10">
                <div class="p-12 bg-white mx-auto rounded-2xl w-100 ">
                    <div class="mb-4">
                        <h3 class="font-semibold text-2xl text-gray-800">Sign In </h3>
                        <p class="text-gray-500">Please sign in to your account.</p>
                    </div>
                    <form action="{{ route('login') }}" method="POST">
                        @csrf
                        @method('POST')
                        <div class="space-y-5">
                            <div class="space-y-2">
                                <label class="text-sm font-medium text-gray-700 tracking-wide">Email</label>
                                <input name="email"
                                    class=" w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
                                    type="" placeholder="mail@gmail.com">
                            </div>
                            <div class="space-y-2">
                                <label class="mb-5 text-sm font-medium text-gray-700 tracking-wide">
                                    Password
                                </label>
                                <input name="password"
                                    class="w-full content-center text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
                                    type="password" placeholder="Enter your password">
                            </div>
                            <div class="flex items-center justify-between">
                                <div class="flex items-center">
                                    <input id="remember_me" name="remember_me" type="checkbox"
                                        class="h-4 w-4 bg-blue-500 focus:ring-blue-400 border-gray-300 rounded">
                                    <label for="remember_me" class="ml-2 block text-sm text-gray-800">
                                        Remember me
                                    </label>
                                </div>
                                <div class="text-sm">
                                    <a href="#" class="text-green-400 hover:text-green-500">
                                        Forgot your password?
                                    </a>
                                </div>
                            </div>
                            <div>
                                <button type="submit"
                                    class="w-full flex justify-center bg-green-400  hover:bg-green-500 text-gray-100 p-3  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500">
                                    Sign in
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</body>

</html>
