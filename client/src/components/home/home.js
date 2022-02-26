import React from "react";
import { Link } from 'react-router-dom';
import './home.scss';

export default function Home(props) {
  return (
    <div>
      <nav className="navegacion">
          <select defaultValue="0" name="OS" className="navegacion__enlace navegacion__enlace--activo">
              <option value="0"> Tipos de Articulos </option>
              <option value="2">Ropa</option> 
              <option value="3">Figuras</option>
              <option value="10">Coleccionables</option> 
          </select>
          <select defaultValue="0" name="OS" className="navegacion__enlace navegacion__enlace--activo">
              <option value="0"> Categorias </option>
              <option value="2">Peliculas</option> 
              <option value="3">Series</option>
              <option value="10">Anime</option> 
              <option value="12">Videojuegos</option> 
          </select>
      </nav>

      <main className="contenedor">
          <h1>Nuestros Productos</h1>

          <div className="grid">
              <div className="producto">
                  <Link to="/products">
                      <img className="producto__imagen" src={require("../../img/1.jpg")} alt="imagen camisa"></img>
                      <div className="producto__informacion">
                          <p className="producto__nombre">VueJS</p>
                          <p className="producto__precio">$25</p>
                      </div>
                  </Link>
              </div>
              <div className="producto">
                  <Link to="/products">
              <img className="producto__imagen" src={require("../../img/2.jpg")} alt="imagen camisa"></img>
                      <div className="producto__informacion">
                          <p className="producto__nombre">AngularJS</p>
                          <p className="producto__precio">$25</p>
                      </div>
                  </Link>
              </div>
              <div className="producto">
                  <Link to="/products">
              <img className="producto__imagen" src={require("../../img/3.jpg")} alt="imagen camisa"></img>
                      <div className="producto__informacion">
                          <p className="producto__nombre">React</p>
                          <p className="producto__precio">$25</p>
                      </div>
                  </Link>
              </div>
              <div className="producto">
                  <Link to="/products">
              <img className="producto__imagen" src={require("../../img/4.jpg")} alt="imagen camisa"></img>
                      <div className="producto__informacion">
                          <p className="producto__nombre">Redux</p>
                          <p className="producto__precio">$25</p>
                      </div>
                  </Link>
              </div>
              <div className="producto">
                  <Link to="/products">
              <img className="producto__imagen" src={require("../../img/5.jpg")} alt="imagen camisa"></img>
                      <div className="producto__informacion">
                          <p className="producto__nombre">NodeJS</p>
                          <p className="producto__precio">$25</p>
                      </div>
                  </Link>
              </div>
              <div className="producto">
                  <Link to="/products">
                      <img className="producto__imagen" src={require("../../img/6.jpg")} alt="imagen camisa"></img>
                      <div className="producto__informacion">
                          <p className="producto__nombre">Sass</p>
                          <p className="producto__precio">$25</p>
                      </div>
                  </Link>
              </div>
              <div className="producto">
                  <Link to="/products">
                      <img className="producto__imagen" src={require("../../img/7.jpg")} alt="imagen camisa"></img>
                      <div className="producto__informacion">
                          <p className="producto__nombre">Html</p>
                          <p className="producto__precio">$25</p>
                      </div>
                  </Link>
              </div>
              <div className="producto">
                  <Link to="/products">
                      <img className="producto__imagen" src={require("../../img/8.jpg")} alt="imagen camisa"></img>
                      <div className="producto__informacion">
                          <p className="producto__nombre">GitHub</p>
                          <p className="producto__precio">$25</p>
                      </div>
                  </Link>
              </div>
              <div className="producto">
                  <Link to="/products">
                      <img className="producto__imagen" src={require("../../img/9.jpg")} alt="imagen camisa"></img>
                      <div className="producto__informacion">
                          <p className="producto__nombre">Bulma</p>
                          <p className="producto__precio">$25</p>
                      </div>
                  </Link>
              </div>
              <div className="producto">
                  <Link to="/products">
                      <img className="producto__imagen" src={require("../../img/10.jpg")} alt="imagen camisa"></img>
                      <div className="producto__informacion">
                          <p className="producto__nombre">TypeScript</p>
                          <p className="producto__precio">$25</p>
                      </div>
                  </Link>
              </div>
              <div className="producto">
                  <Link to="/products">
                      <img className="producto__imagen" src={require("../../img/11.jpg")} alt="imagen camisa"></img>
                      <div className="producto__informacion">
                          <p className="producto__nombre">Drupal</p>
                          <p className="producto__precio">$25</p>
                      </div>
                  </Link>
              </div>
              <div className="producto">
                  <Link to="/products">
                      <img className="producto__imagen" src={require("../../img/12.jpg")} alt="imagen camisa"></img>
                      <div className="producto__informacion">
                          <p className="producto__nombre">JavaScript</p>
                          <p className="producto__precio">$25</p>
                      </div>
                  </Link>
              </div>
              <div className="producto">
                  <Link to="/products">
                      <img className="producto__imagen" src={require("../../img/13.jpg")} alt="imagen camisa"></img>
                      <div className="producto__informacion">
                          <p className="producto__nombre">GraphQL</p>
                          <p className="producto__precio">$25</p>
                      </div>
                  </Link>
              </div>
              <div className="producto">
                  <Link to="/products">
                      <img className="producto__imagen" src={require("../../img/14.jpg")} alt="imagen camisa"></img>
                      <div className="producto__informacion">
                          <p className="producto__nombre">WordPress</p>
                          <p className="producto__precio">$25</p>
                      </div>
                  </Link>
              </div>

              <div className="grafico grafico--camisas"></div>
              <div className="grafico grafico--node"></div>
          </div>
      </main>
    </div>
  );
}
