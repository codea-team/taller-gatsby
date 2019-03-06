---
date: '2019-03-05'
title: 'Mi primer articulo'
author: woostbot
tags: ['codea']
path: '/mi-primer-blog'
---

Codea es un proyecto que nace para poder compartir libremente experiencias con desarrollo de software, desde cómo solucionaste un problema hasta crear artículos de cualquier lenguaje totalmente en español, si eres un desarrollador o UX etc. Y te gusta compartir lo que haces o ayudar a los demás bienvenid@ codea quiere que la comunidad crezca con gente como tú.

## ¿Por qué ayudar a la comunidad?

Soy un desarrollador que le apasiona mucho crear cosas para la web, todo eso me ha llevado a presentarme con problemas en el desarrollo por experimentar con librerías, Framenworks, software, etc. De verdad doy gracias a todas esas comunidades que hacen un gran esfuerzo para hacer nuestra vida de desarrollador más fácil, ya sea que estamos aprendiendo a programar, aprendiendo un nuevo lenguaje o cuando tenemos un error que no sabemos solucionar, todos somos la comunidad desde aportar con una respuesta en sitios como stackoverflow, un blog, etc.

> Por más pequeña que sientas que es tu aportación no importan por algo se empieza o no. :stuck_out_tongue_winking_eye:

En el próximo articulo escribiré sobre los pasos para poder aportar en codea :sunglasses:.

> Gracias por darte unos minutos de leer este pequeño articulo donde saludo a la futura comunidad de codea.
> Para serte honesto es mi primer artículo, pero con gran pasión me tomaré el tiempo que sea para poder mejorarlo.

##style por defecto

```js
import React from 'react'

import code from 'images/svg/code.svg'
import logo from 'images/svg/logo.svg'

import styles from './styles.module.scss'

function Footer() {
  return (
    <footer className={styles.root}>
      <div className={styles.footer}>
        <div className={styles.codeaSocial}>
          <div className={styles.social}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/codea_oficial"
              title="Codea Instagram"
              className={styles.redSocial}>
              <img src={instagram} alt="Instagram" />
            </a>
          </div>
          <div>
            © 2019
            <strong> Codea</strong>, all rights reserved
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
```
