<template>
  <v-flex xs12 sm6 md4 lg4 xl4>
    <v-card :to="'product/'+(product.name).split(' ').join('-')+product.id" hover>
      <v-img :src="product.product.product_image" aspect-ratio="2.75" height="230"></v-img>

      <v-card-title primary-title>
        <div>
          <h3 class="headline mb-0">{{product.name}}</h3>
          <div>
            Price:
            <a
              class="pink--text title font-weight-medium"
            >{{product.product.variations[0].price_ex_vat}}$</a>
          </div>
        </div>
      </v-card-title>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  props: ["product"]
};
</script>

<style scoped>
</style>