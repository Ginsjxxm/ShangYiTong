<<template>
  <div class="container">
    <HospitalTop/>
    <div class="content">
      <router-view></router-view>
    </div>
    <HospitalBottom/>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
  .container{
    display: flex;
    flex-direction: column;
    align-items: center;
    .content{
      margin-top: 70px;
      width: 1200px;
      min-height: 700px;
    }
    .bottom{
      width: 100%;
      height: 50px;
      
    }
  }
</style>


