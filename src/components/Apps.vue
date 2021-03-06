<template>
  <v-card
    class="mx-auto"
    max-width="700"
    outlined
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="overline mb-4">
          App
        </div>
        <v-list-item-title class="headline mb-1">
          Infection Predict
        </v-list-item-title>
        <v-list-item-subtitle>Infection Predict</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar
        tile
        size="80"
        color="grey"
      ></v-list-item-avatar>
    </v-list-item>

    <v-divider></v-divider>

    <v-list-item three-line>
      <v-list-item-content>    
        <div class="overline mb-4">
          <b>Artigo científico:</b> PATTERN RECOGNITION ALGORITHMS FOR THE SURVEY OF CRITICAL PROBABILITY OF INFECTION IN SURGICAL SITES
          <br><b>Congresso: Decennial 2020</b>
          <br><b>ANO:</b> 2020  
        </div>
      </v-list-item-content>
    </v-list-item>

    <v-card-actions>
      <v-btn
        outlined
        rounded
        text
      >
        Artigo científico
      </v-btn>
      <v-btn
        outlined
        rounded
        text
      >
        Baixe agora
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
    name: "Apps",
}
</script>

<style>

</style>