<template>
  <v-container grid-list-sm>
    <v-layout justify-center column>
      <div
        class="text-md-left display-1"
      >{{products[($route.params.id).replace(/\D/g,'')-1].product.name}}</div>

      <v-img
        :src="products[($route.params.id).replace(/\D/g,'')-1].product.product_image"
        aspect-ratio="2.75"
        height="630"
        contain
      ></v-img>
      <div class="text-xs-center headline font-weight-medium">
        Price:
        <a
          class="pink--text title font-weight-medium"
        >{{products[($route.params.id).replace(/\D/g,'')-1].product.variations[0].price_ex_vat}}$</a>
      </div>
      <div class="text-xs-center headline font-weight-medium">
        Stock Count:
        <a
          class="pink--text title font-weight-medium"
        >{{products[($route.params.id).replace(/\D/g,'')-1].product.variations[0].stock_count}}pc</a>
      </div>
    </v-layout>
  </v-container>
</template>



 

<script>
import axios from "axios";
export default {
  data() {
    return {
      products: {}
    };
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

      this.products = result.data.data.catalogue.children;
      console.log(this.products);
    } catch (error) {
      console.error(error);
    }
  }
};
</script>

<style scoped>
</style>