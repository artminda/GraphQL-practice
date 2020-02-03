<template>
  <v-container fill-height>
    <v-layout justify-center>
      <v-flex>
        <v-img src="https://snowball.digital/static/snowball_logo.svg" aspect-ratio="11" contain></v-img>
        <br>
        <div class="text-md-center display-3">
          Server Side
          Rendered
          using GraphQL
        </div>

        <div class="text-md-left font-weight-light display-1">
          At Snowball Digital we usualy approach product design with a decoupled
          approach where we have a dedicated back-end connected via a graphQL api to a front-end.
        </div>
        <br>
        <div class="text-md-left font-weight-light display-1">
          We have prepared a public endpoint with an array of products. Create a simple app
          that list the products on the frontpage and a dedicated product page that displays the
          product information.
        </div>
        <br>
        <div
          class="text-md-left font-weight-light display-1"
        >The API uses graphQL with the following endpoint:</div>
        <br>
        <a
          class="pink--text text-md-left font-weight-light display-1"
          href="https://api.crystallize.com/graphql"
          style="text-decoration: none"
        >https://api.crystallize.com/graphql</a>
        <br>
        <br>
        <div
          class="text-md-left font-weight-light display-1"
        >Use the following query for inspiration:</div>
        <br>
        <pre>
        <code class="headline">
          {
            catalogue(url:"/illustrations", tenantID:"demo"){&nbsp;&nbsp;&nbsp;&nbsp;
             name
             content_fields
             children {
              link
              name
              product {
               name
               variations {
                variation_sku
                stock_count
                price_ex_vat
                }
               }
              }
             }
           }
        </code>
        </pre>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {};
</script>

<style scoped>
</style>