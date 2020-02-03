<template>
  <v-container grid-list-xl>
    <v-layout row wrap>
      <product v-for="product in products" :key="product.id" :product="product"></product>
    </v-layout>
  </v-container>
</template>

<script>
import Product from "../components/Product.vue";

import axios from "axios";
export default {
  data() {
    return {
      products: {}
    };
  },
  components: {
    Product
  },

  async mounted() {
    try {
      var result = await axios({
        method: "POST",
        url: "https://api.crystallize.com/graphql",
        data: {
          query: `
                            {
  catalogue(url: "/illustrations", tenantID: "demo") {
    name
    content_fields
    children {
      link
      name
      product {
        name
        product_image
        variations {
          variation_sku
          stock_count
          price_ex_vat
        }
      }
    }
  }
}
                        `
        }
      });
      console.log(result);
      this.products = result.data.data.catalogue.children;
      this.products.forEach((o, i) => (o.id = i + 1));
      console.log(this.products);
    } catch (error) {
      console.error(error);
    }
  }
};
</script>

<style scoped>
</style>