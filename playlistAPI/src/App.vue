<template lang="pug">
  #app
    img(src='./assets/logo.png')
    h1 Playlist
    select(v-model="selectedCountry")
      option(v-for="country in countries" v-bind:value="country.value") {{country.name}}
    ul
      //-- Here we declare a component which we will call from other file using this new tag of artist
      //--in order to recognize and get easily each one of the elements in this loop Vue give you a warning in the console telling you to bind a key for each one. So in this case we add v-bind:key using from the API the id of the artist for this purpose.
      artist(v-for="artist in artists" v-bind:artist="artist" v-bind:key="artist.mbid")
</template>

<script>
//-Here we import a component from an external folder. This time to create the "artist" tag element.
//also we need to add in the export script the "components" with a name which will use the value (try to make them the same to dont confuse)
import artist from './components/artist.vue'
//not necessary to write the whole name of the file since we export it as devault
//ex: import getArtists from './api/index.js'
import getArtists from './api'
export default {
  name: 'app',
  data () {
    return {
      artists:[],
      countries:[
        {name: 'Espana', value: 'spain'},
        {name: 'Panama', value: 'panama'},
        {name: 'Japon', value:'japan'}
      ],
      selectedCountry: 'japan'
    }
  },
  components:{
    artist: artist
  },
  methods: {
    refreshArtists() {
      const self = this
      getArtists(this.selectedCountry).then( function (artists){
        self.artists = artists
      })
    }
  },
  mounted(){
    this.refreshArtists()
  },
  watch:{
    selectedCountry(){
      this.refreshArtists()
    }
  }
}
</script>

<style lang="stylus">
  #app
    font-family 'Avenir', Helvetica, Arial, sans-serif
    -webkit-font-smoothing antialiased
    -moz-osx-font-smoothing grayscale
    text-align center
    color #2c3e50
    margin-top 60px
  h1, h2 
    font-weight normal
  ul 
    list-style-type none
    padding 0
  li
    display inline-block
    background green
    margin 0 10px
  a 
    color #42b983
</style>




