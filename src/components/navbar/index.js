function Navbar(props) {

  return (
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">WebDev</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="/">Somar</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/subtrair">Subtrair</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/dividir">Dividir</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/multiplicar">Multiplicação</a>
      </li>
    </ul>
  </div>
</nav>
  );
}

export default Navbar;
