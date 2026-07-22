# 📊 Graphase — Simulador económico

Simulador interactivo de micro y macroeconomía para estudiantes, profesores y curiosos. En vez de los gráficos estáticos del libro de texto, aquí mueves los parámetros y ves el equilibrio, los excedentes y las políticas reaccionar en tiempo real — con una explicación en español de qué acaba de pasar.

👉 **[Abrir la app](https://rcorne.github.io/graphase/)** · funciona offline e instalable en el teléfono.

---

## ✨ Qué lo hace distinto

* **Escenarios de un toque.** Impuesto al tabaco, subsidio, demanda rígida, shock de costos, expansión fiscal, expansión monetaria, trampa de liquidez, shock inflacionario. Tocas uno y ves la historia completa.
* **Lectura económica automática.** No solo el número: *"de los $4 de impuesto, el consumidor absorbe 71% y el productor 29% — la demanda es más rígida, así que el peso cae sobre el comprador"*.
* **Áreas de bienestar dibujadas.** Excedente del consumidor y del productor, recaudación fiscal y pérdida irrecuperable de eficiencia se sombrean sobre el gráfico, no solo se calculan.
* **Arrastre de curvas.** Modo explícito para tomar una curva y moverla con el dedo o el mouse.
* **Sliders con contexto.** Cada parámetro explica qué representa en la economía real, no solo su letra.
* **Web app móvil.** Barra de navegación inferior, panel de parámetros como bottom sheet deslizable, modo oscuro, PWA instalable con service worker.

---

## 📈 Módulos

### 1. Microeconomía — mercado de un bien

Demanda `P = a − b·Q`, oferta `P = c + d·Q`, e intervención fiscal con impuesto unitario **T** (usa T negativo para simular un **subsidio**).

Calcula equilibrio libre, precio al consumidor y al productor, excedentes, recaudación (o costo del subsidio), pérdida de eficiencia y el reparto de la carga tributaria `d/(b+d)`.

### 2. Macroeconomía — modelo IS-LM

```
IS: r = A/b − ((1−c)/b)·Y ,  A = C₀ − c·T + I₀ + G
LM: r = (k/h)·Y − (M/P)/h
```

Equilibrio general, componentes de la demanda, saldo fiscal, multiplicador simple y **efecto expulsión** (la diferencia entre el multiplicador keynesiano y el resultado real). Al cambiar de escenario, la situación anterior queda dibujada en gris punteado para ver el desplazamiento de la curva.

---

## 🚀 Uso local

No requiere build, Node ni servidor de aplicaciones. Para que funcione el service worker necesita servirse por HTTP (no `file://`):

```bash
git clone https://github.com/rcorne/graphase.git
cd graphase
python3 -m http.server 8000
# abre http://localhost:8000
```

---

## 🛠️ Stack

HTML5, CSS3 y JavaScript vanilla (ES6) sin frameworks · [Chart.js](https://www.chartjs.org/) para el renderizado · Service worker con estrategia *stale-while-revalidate* para uso offline.

Identidad visual según el manual de diseño Oikos: paleta Egeo / Terracota / Mármol / Tinta, tipografías Outfit y Manrope.

---

## 🤝 Contribuciones

Bienvenidas. Modelos que faltan y calzarían bien: frontera de posibilidades de producción, curvas de indiferencia, curva de Phillips, AD-AS, precios máximos y mínimos.

1. Haz un fork del proyecto.
2. Crea una rama (`git checkout -b feature/NuevoModelo`).
3. Confirma tus cambios (`git commit -m 'Añadir nuevo modelo macro'`).
4. Haz push a la rama (`git push origin feature/NuevoModelo`).
5. Abre un Pull Request.

---

## ☕ Apoya el proyecto

Si te sirve, [invítanos un café](https://www.paypal.com/invoice/p/#RAUCDLSQXTS2S2LP) para seguir mejorando esta y otras soluciones tecnológicas.

## 📝 Licencia

MIT — úsalo, modifícalo y distribúyelo libremente para fines educativos o personales.
