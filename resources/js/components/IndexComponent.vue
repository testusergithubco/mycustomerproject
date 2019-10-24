<template>
    <div class="pxp-content">
    <Slide/>
    <FeaturedProperties/>
    <WhyChooseUs/>
        <FeaturedDistricts/>
        <Search/>
        <Agents/>
        <MembershipPlans/>


    </div>
</template>

<script>
    import Slide from './slideComponent';
    import FeaturedProperties from './FeaturedPropertiesComponent';
    import WhyChooseUs from './WhyChooseUsComponent';
    import FeaturedDistricts from './FeaturedDistrictsComponent';
    import Search from './SearchComponent';
    import Agents from './AgentsComponent';
    import MembershipPlans from './MembersipPlansComponent';
    export default {
        name: "index-component",
        components:{
            Slide,
            FeaturedProperties,
            WhyChooseUs,
            FeaturedDistricts,
            Search,
            Agents,
            MembershipPlans


        }
    }
</script>

<style scoped>

</style>