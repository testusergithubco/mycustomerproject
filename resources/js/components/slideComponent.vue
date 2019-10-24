<template>
    <div class="pxp-hero vh-100">
        <div class="pxp-hero-bg pxp-cover pxp-cover-bottom" style="background-image: url(images/hero-1.jpg);"></div>
        <div class="pxp-hero-opacity"></div>
        <div class="pxp-hero-caption">
            <div class="container">
                <h1 class="text-white">Find your future home</h1>

                <form class="pxp-hero-search mt-4" action="#">
                    <div class="row">
                        <div class="col-sm-12 col-md-4">
                            <div class="form-group">
                                <select class="custom-select">
                                    <option selected>Buy</option>
                                    <option value="1">Rent</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-sm-12 col-md-8">
                            <div class="form-group">
                                <input type="text" class="form-control pxp-is-address" placeholder="Enter address...">
                                <span class="fa fa-search"></span>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "slide-component"
    }
</script>

<style scoped>

</style>