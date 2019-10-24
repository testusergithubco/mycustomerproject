<template>
    <div class="pxp-header fixed-top pxp-animate">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-5 col-md-2">
                    <a href="index-2.html" class="pxp-logo text-decoration-none">سکنا فایل</a>
                </div>
                <div class="col-2 col-md-8 text-center">
                    <ul class="pxp-nav list-inline">
                        <li class="list-inline-item">
                            <a href="#">صفحه اصلی</a>
                            <!--<ul class="pxp-nav-sub rounded-lg">-->
                                <!--<li><a href="index-2.html">Version 1</a></li>-->
                                <!--<li><a href="index-3.html">Version 2</a></li>-->
                                <!--<li><a href="index-4.html">Version 3</a></li>-->
                            <!--</ul>-->
                        </li>
                        <li class="list-inline-item">
                            <a href="#">ملک ها</a>
                            <ul class="pxp-nav-sub rounded-lg">
                                <li><a href="properties.html">برای اجاره</a></li>
                                <li><a href="single-property.html">برای رهن</a></li>
                                <li><a href="submit-property.html">برای خرید</a></li>
                            </ul>
                        </li>
                        <li class="list-inline-item">
                            <a href="#">Agents</a>
                            <ul class="pxp-nav-sub rounded-lg">
                                <li><a href="agents.html">All Agents</a></li>
                                <li><a href="single-agent.html">Single Agent</a></li>
                            </ul>
                        </li>
                        <li class="list-inline-item">
                            <a href="#">Blog</a>
                            <ul class="pxp-nav-sub rounded-lg">
                                <li><a href="blog.html">All Blog Posts</a></li>
                                <li><a href="single-post.html">Single Blog Post</a></li>
                            </ul>
                        </li>
                        <li class="list-inline-item">
                            <a href="#">Themes</a>
                            <ul class="pxp-nav-sub rounded-lg">
                                <li><a href="index-2.html">Light</a></li>
                            </ul>
                        </li>
                        <li class="list-inline-item pxp-is-last"><a href="contact.html">Contact Us</a></li>
                        <li class="list-inline-item pxp-has-btns">
                            <div class="pxp-user-btns">
                                <a href="#" class="pxp-user-btns-signup pxp-signup-trigger">Sign Up</a>
                                <a href="#" class="pxp-user-btns-login pxp-signin-trigger">Sign In</a>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="col-5 col-md-2 text-right">
                    <a href="javascript:void(0);" class="pxp-header-nav-trigger"><span class="fa fa-bars"></span></a>
                    <a href="javascript:void(0);" class="pxp-header-user pxp-signin-trigger"><span class="fa fa-user-o"></span></a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "menu-component",
        mounted(){
            console.log('ok');
        }
    }
</script>

<style scoped>

</style>