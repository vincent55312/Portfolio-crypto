<template>
<div class="container">
  <div class="row justify-content-center">
       <form>
        <div class="form-group">
            <input type="email" class="form-control" id="email" placeholder="Email">
        </div>
        <div class="form-group">
            <input type="password" class="form-control" id="password" placeholder="Password">
        </div>
        <div class="d-flex flex-row align-items-center justify-content-between">
            <button class="btn btn-primary">Create Account</button>
        </div>
    </form>
    </div>
  </div>
</template>

<style lang="scss">

.form-control{
  width: 80%;

  @media screen and (min-width: 768px){
    width: 30%;
  }

  border: 3px solid #1F4690;
  border-radius: 5px;
  padding: 20px;
  padding: 25px 15px;
  margin-bottom: 1.3rem;
}

.form-control:focus {
    color: #000000;
    background-color: #ffffff;
    outline: 0;
    box-shadow: none;
}

.btn{
  color: #231955;
  padding: 0.6rem 1.2rem;
  background: #FFE5B4;
  border: 2px solid #FFE5B4;
}
.btn-primary:hover {
    background-color: #E8AA42;
    border-color: #E8AA42;
  transition: .3s;

}
</style>

