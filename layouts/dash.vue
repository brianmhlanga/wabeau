<template>
    <main>
        <!-- Import all the site's css files -->
	<!--plugins-->
    <link rel="stylesheet" href="/css/authentication.css" />
    <link rel="stylesheet" href="/css/lineicons.css" />
    <link rel="stylesheet" href="/css/main.css" />
    <link rel="stylesheet" href="/css/style.css" />
    <link rel="stylesheet" href="/css/primeblocks.css" />
    <link rel="stylesheet" href="/css/theme.css" />
    <link rel="stylesheet" href="/css/dataTables.bootstrap4.min.css">
    <link rel="stylesheet" href="/css/buttons.bootstrap4.min.css">
    <link rel="stylesheet" href="/css/keyTable.dataTables.min.css">
	<link href="/plugins/vectormap/jquery-jvectormap-2.0.2.css" rel="stylesheet"/>
	<link href="/plugins/simplebar/css/simplebar.css" rel="stylesheet" />
	<link href="/plugins/perfect-scrollbar/css/perfect-scrollbar.css" rel="stylesheet"/>
	<!-- loader-->
	<link href="/css/pace.min.css" rel="stylesheet" />
	<!-- Bootstrap CSS -->
	<link href="/css/bootstrap.min.css" rel="stylesheet">
	<link href="/css/bootstrap-extended.css" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap" rel="stylesheet">
	<link href="/css/app.css" rel="stylesheet">
	<link href="/css/icons.css" rel="stylesheet">
	<!-- Theme Style CSS -->
	<link rel="stylesheet" href="/css/dark-theme.css" />
	<link rel="stylesheet" href="/css/semi-dark.css" />
	<link rel="stylesheet" href="/css/header-colors.css" />
    <body class="fg">
	<!--wrapper-->
	<div class="wrapper">
	 <!--start header wrapper-->	
	  <div class="header-wrapper">
		<!--start header -->
		<header>
			<div class="topbar d-flex align-items-center">
				<nav class="navbar navbar-expand gap-3">
					<div class="topbar-logo-header d-none d-lg-flex">
						<div class="">
							<img src="/images/logo.png" class="logo-icon" alt="logo icon">
						</div>
						<div class="">
							<h4 class="logo-text">Wabeau</h4>
						</div>
					</div>
					<div class="mobile-toggle-menu d-block d-lg-none" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"><i class='bx bx-menu'></i></div>
					<div class="search-bar d-lg-block d-none" data-bs-toggle="modal" data-bs-target="#SearchModal">
						<a href="avascript:;" class="btn d-flex align-items-center"><i class='bx bx-search'></i>Search</a>
					 </div>
					  <div class="top-menu ms-auto">
						<ul class="navbar-nav align-items-center gap-1">
							<li class="nav-item mobile-search-icon d-flex d-lg-none" data-bs-toggle="modal" data-bs-target="#SearchModal">
								<a class="nav-link" href="avascript:;"><i class='bx bx-search'></i>
								</a>
							</li>
							<li class="nav-item dropdown dropdown-large">
								<a @click="Logout" class="nav-link dropdown-toggle dropdown-toggle-nocaret position-relative" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
									<i class='pi pi-sign-out'></i>
								</a>
							</li>
						</ul>
					</div>
					<div class="user-box dropdown px-3">
						
						<a class="d-flex align-items-center nav-link dropdown-toggle gap-3 dropdown-toggle-nocaret" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
							<div class="user-info">
								<p class="user-name mb-0">{{ name }} {{ last_name }}</p>
							</div>
						</a>
						<ul class="dropdown-menu dropdown-menu-end">
							<li><a class="dropdown-item d-flex align-items-center" href="javascript:;"><i class="bx bx-user fs-5"></i><span>Profile</span></a>
							</li>
							<li><a class="dropdown-item d-flex align-items-center" href="javascript:;"><i class="bx bx-cog fs-5"></i><span>Settings</span></a>
							</li>
							<li><a class="dropdown-item d-flex align-items-center" href="javascript:;"><i class="bx bx-home-circle fs-5"></i><span>Dashboard</span></a>
							</li>
							<li><a class="dropdown-item d-flex align-items-center" href="javascript:;"><i class="bx bx-dollar-circle fs-5"></i><span>Earnings</span></a>
							</li>
							<li><a class="dropdown-item d-flex align-items-center" href="javascript:;"><i class="bx bx-download fs-5"></i><span>Downloads</span></a>
							</li>
							<li>
								<div class="dropdown-divider mb-0"></div>
							</li>
							<li><a class="dropdown-item d-flex align-items-center" href="javascript:;"><i class="bx bx-log-out-circle"></i><span>Logout</span></a>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		</header>
		<!--end header -->
		<!--navigation-->
		   <div class="primary-menu">
			   <nav class="navbar navbar-expand-lg align-items-center">
				  <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
					<div class="offcanvas-header border-bottom">
						<div class="d-flex align-items-center">
							<div class="">
								<!-- <img src="/assets/images/logo-icon.png" class="logo-icon" alt="logo icon"> -->
							</div>
							<div class="">
								<h4 class="logo-text">Rocker</h4>
							</div>
						</div>
					  <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
					</div>
					<div class="offcanvas-body">
					  <ul class="navbar-nav align-items-center flex-grow-1">
						<li class="nav-item dropdown">
							<a class="nav-link dropdown-toggle dropdown-toggle-nocaret" href="javascript:;" data-bs-toggle="dropdown">
								<div class="parent-icon"><i class='bx bx-home-alt'></i>
								</div>
								<div class="menu-title d-flex align-items-center">Competitions</div>
								<div class="ms-auto dropy-icon"><i class='bx bx-chevron-down'></i></div>
							</a>
							<ul class="dropdown-menu">
							  <li><a class="dropdown-item" href="/admin/competitions"><i class='pi pi-plus' ></i>Add Competition</a></li>
							</ul>
						  </li>
					  </ul>
					</div>
				  </div>
			  </nav>
		</div>
		<!--end navigation-->
	   </div>
	   <!--end header wrapper-->
		<!--start page wrapper -->
		<div class="page-wrapper">
			<slot />
		</div>
		<!--end page wrapper -->



		<!-- search modal -->
		<div class="modal" id="SearchModal" tabindex="-1">
			<div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-fullscreen-md-down">
			  <div class="modal-content">
				<div class="modal-header gap-2">
				  <div class="position-relative popup-search w-100">
					<input class="form-control form-control-lg ps-5 border border-3 border-primary" type="search" placeholder="Search">
					<span class="position-absolute top-50 search-show ms-3 translate-middle-y start-0 top-50 fs-4"><i class='bx bx-search'></i></span>
				  </div>
				  <button type="button" class="btn-close d-md-none" data-bs-dismiss="modal" aria-label="Close"></button>
				</div>
				<div class="modal-body">
					<div class="search-list">
					   <p class="mb-1">Html Templates</p>
					   <div class="list-group">
						  <a href="javascript:;" class="list-group-item list-group-item-action active align-items-center d-flex gap-2 py-1"><i class='bx bxl-angular fs-4'></i>Best Html Templates</a>
						  <a href="javascript:;" class="list-group-item list-group-item-action align-items-center d-flex gap-2 py-1"><i class='bx bxl-vuejs fs-4'></i>Html5 Templates</a>
						  <a href="javascript:;" class="list-group-item list-group-item-action align-items-center d-flex gap-2 py-1"><i class='bx bxl-magento fs-4'></i>Responsive Html5 Templates</a>
						  <a href="javascript:;" class="list-group-item list-group-item-action align-items-center d-flex gap-2 py-1"><i class='bx bxl-shopify fs-4'></i>eCommerce Html Templates</a>
					   </div>
					   <p class="mb-1 mt-3">Web Designe Company</p>
					   <div class="list-group">
						  <a href="javascript:;" class="list-group-item list-group-item-action align-items-center d-flex gap-2 py-1"><i class='bx bxl-windows fs-4'></i>Best Html Templates</a>
						  <a href="javascript:;" class="list-group-item list-group-item-action align-items-center d-flex gap-2 py-1"><i class='bx bxl-dropbox fs-4' ></i>Html5 Templates</a>
						  <a href="javascript:;" class="list-group-item list-group-item-action align-items-center d-flex gap-2 py-1"><i class='bx bxl-opera fs-4'></i>Responsive Html5 Templates</a>
						  <a href="javascript:;" class="list-group-item list-group-item-action align-items-center d-flex gap-2 py-1"><i class='bx bxl-wordpress fs-4'></i>eCommerce Html Templates</a>
					   </div>
					   <p class="mb-1 mt-3">Software Development</p>
					   <div class="list-group">
						  <a href="javascript:;" class="list-group-item list-group-item-action align-items-center d-flex gap-2 py-1"><i class='bx bxl-mailchimp fs-4'></i>Best Html Templates</a>
						  <a href="javascript:;" class="list-group-item list-group-item-action align-items-center d-flex gap-2 py-1"><i class='bx bxl-zoom fs-4'></i>Html5 Templates</a>
						  <a href="javascript:;" class="list-group-item list-group-item-action align-items-center d-flex gap-2 py-1"><i class='bx bxl-sass fs-4'></i>Responsive Html5 Templates</a>
						  <a href="javascript:;" class="list-group-item list-group-item-action align-items-center d-flex gap-2 py-1"><i class='bx bxl-vk fs-4'></i>eCommerce Html Templates</a>
					   </div>
					   <p class="mb-1 mt-3">Online Shoping Portals</p>
					   <div class="list-group">
						  <a href="javascript:;" class="list-group-item list-group-item-action align-items-center d-flex gap-2 py-1"><i class='bx bxl-slack fs-4'></i>Best Html Templates</a>
						  <a href="javascript:;" class="list-group-item list-group-item-action align-items-center d-flex gap-2 py-1"><i class='bx bxl-skype fs-4'></i>Html5 Templates</a>
						  <a href="javascript:;" class="list-group-item list-group-item-action align-items-center d-flex gap-2 py-1"><i class='bx bxl-twitter fs-4'></i>Responsive Html5 Templates</a>
						  <a href="javascript:;" class="list-group-item list-group-item-action align-items-center d-flex gap-2 py-1"><i class='bx bxl-vimeo fs-4'></i>eCommerce Html Templates</a>
					   </div>
					</div>
				</div>
			  </div>
			</div>
		  </div>
		<!-- end search modal -->



		<!--start overlay-->
		<div class="overlay toggle-icon"></div>
		<!--end overlay-->
		<!--Start Back To Top Button--> <a href="javaScript:;" class="back-to-top"><i class='bx bxs-up-arrow-alt'></i></a>
		<!--End Back To Top Button-->
		<footer class="page-footer">
			<p class="mb-0">Copyright © 2023. All right reserved.</p>
		</footer>
	</div>
	<!--end wrapper-->
	<!--start switcher-->
	
	<!--end switcher-->
	<!-- Bootstrap JS -->
</body>
    </main>
</template>

<script lang="ts" setup>
  import { storeToRefs } from "pinia";
    import { useToast } from "primevue/usetoast";
    import { useAuthStore } from "~/stores/auth";
    const authStore = useAuthStore()
	const name = storeToRefs(authStore).first_name
	const last_name = storeToRefs(authStore).last_name
	const Logout =async () => {
		let result = authStore.logout().then( async() => {
            await authStore.me().then(()=> {
				navigateTo('/')
			})
        })
	}
	onMounted(async() => {
		let result = await authStore.me().then((data:any) => {
			console.log("me data",data)
		})
	})

</script>

<style>

</style>