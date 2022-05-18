<template>
    <div class="flex flex-col justify-between w-16 h-screen bg-white border-r drop-shadow-sm">
    <div>
			<div class="inline-flex items-center justify-center w-16 h-16">
			<img src="https://logo-marque.com/wp-content/uploads/2020/12/Google-Drive-Logo.png">
			</div>

			<div class="border-t border-gray-100">
				<nav class="flex flex-col p-2">
					<div class="py-4">
					<a
							href=""
							class="flex justify-center px-2 py-1.5 t text-blue-700 rounded bg-blue-50 group relative"
					>
							<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
								<path stroke-linecap="round" stroke-linejoin="round" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
							</svg>
							<span
							class="absolute text-xs font-medium text-white bg-gray-900 left-full ml-4 px-2 py-1.5 top-1/2 -translate-y-1/2 rounded opacity-0 group-hover:opacity-100"
							>
							General
							</span>
					</a>
					</div>

					<ul class="pt-4 space-y-1 border-t border-gray-100"></ul>
				</nav>
			</div>
    </div>

    <div class="sticky inset-x-0 bottom-0 p-2 bg-white border-t border-gray-100">

    </div>
</div>
</template>
<script>
export default {
  name: 'Sidebar',
}
</script>