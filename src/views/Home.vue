<template>
  <div class="home">
    <h1>Hello IPFS</h1>
    <p>Work on your VueJS project and deploy it directly on IPFS using several providers.</p>
    <hr />
    <h2>Available providers</h2>
    Web3.Storage:<br />
    <pre>yarn deploy web3storage</pre>
    Pinata:<br />
    <pre>yarn deploy pinata</pre>
  </div>
</template>

<style>
pre {
  background: #666;
  border-radius: 5px;
  padding: 10px 0;
}
body,
html {
  background: #000;
  color: #fff;
  text-align: center;
  font-family: monospace;
}
h1 {
  font-size: 35px;
  margin-top: 70px;
}
p {
  font-size: 16px;
  text-align: center;
  padding: 0 50px;
}
#carousel {
  padding: 50px;
}
.home {
  width: 50%;
  display: inline-block;
}
</style>
<script>
export default {
  name: "Home",
};
</script>
