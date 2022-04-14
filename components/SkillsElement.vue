<template>
            <div class="overflow-x-auto grid place-items-center border-lime-400 border-4 p-4 rounded-3xl mt-8">
            <h2 class="font-semibold text-2xl mb-8">{{skilltype}}</h2>
  <table class="table table-zebra w-96">
    <thead>
      <tr>
        <th>Skill</th>
        <th>Self perceived proficiency</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{{skillone}}</td>
        <td>{{profone}}</td>
      </tr>
      <tr>
        <td>{{skilltwo}}</td>
        <td>{{proftwo}}</td>
      </tr>
      <tr>
        <td>{{skillthree}}</td>
        <td>{{profthree}}</td>
      </tr>
      <tr>
        <td>{{skillfour}}</td>
        <td>{{proffour}}</td>
      </tr>
            <tr>
        <td>{{skillfive}}</td>
        <td>{{proffive}}</td>
      </tr>
    </tbody>
  </table>
</div>
</template>

<script>
export default{
    props:['skilltype', 'skillone','skilltwo', 'skillthree','skillfour', 'skillfive', 'profone', 'proftwo', 'profthree', 'proffour', 'proffive'],
}
</script>