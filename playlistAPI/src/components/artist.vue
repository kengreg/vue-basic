<template lang="pug">
  li.artist
    h2
      //--when using the variables from the parent as an attribute inside of a tag you need to use v-bind: before the attribute so  it can be used.
      //--in the case of the text , you can use {{}} and the variable of the parent to print the variable.
      a(v-bind:href="artist.url" target="_blank") {{artist.name}}
      //--when trying to get the key/name of a value you can use corchetes with the keyvalue.
      img(v-bind:src="artist.image[3]['#text']")
</template>

<script>
//--this section is used to export the component to be used in other place. When you use the "export default" the content below will be the default content used when you import the component
export default {
  //--the name MUST be the same as the name used as a tag in the parent which call this component. In the case this app, we used "artist" as tag in the App.vue
  //-- The props is the way of how you give the propieties or values from the parent to this component.
  name: 'artist',
  props: ['artist']
}

</script>

<style lang="stylus">
//--when we use classnames as selector we need to be carefull to dont use the same class in other components. If you only want to use the below style in this components you can use scoped so vue create a data id added to the class to only target this component classes.
li.artist
  display inline-block
  vertical-align middle
  background #f5f5f5
  margin 10px 0
</style>




