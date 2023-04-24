import React, {Suspense, lazy} from "react";
import { Router, Switch} from "react-router-dom";

import FullPageLayout from "../../layout/FullPageLayout";
import MenuPageLayout from "../../layout/MenuPageLayout";
import history from "../../utility/History";


const LazyHome = lazy(() => import ("../../page/home/home"));
const LazyFact = lazy(() => import ("../../page/fact/fact"));
const LazyBienvenido = lazy(() => import("../../page/bienvenido/Bienvenido"));
const LazyFormulario = lazy(() => import("../../page/home/Formulario"));
const LazyAviones = lazy(() => import("../../page/aviones/Aviones"));
const LazyDestino = lazy(() => import("../../page/destinos/Destinos"));
const LazyAsiento = lazy(() => import("../../page/Asientos/Asientos"));

const AppRouter = (props) => {
    console.log(props)
    return (
        <Router basename='/' history={history}>
            <Switch>
                <FullPageLayout 
                {...props} 
                exact path="/home" 
                render={matchprops => (
                    <Suspense fallback={<h1>Cargando</h1>}>
                        <LazyHome {...matchprops} {...props} />
                    </Suspense>
                )}
                ></FullPageLayout>
            </Switch>
            <Switch>
                <FullPageLayout 
                {...props} 
                exact path="/fact" 
                render={matchprops => (
                    <Suspense fallback={<h1>Cargando</h1>}>
                        <LazyFact {...matchprops} {...props} />
                    </Suspense>
                )}
                ></FullPageLayout>
            </Switch>
            <Switch>
                <FullPageLayout 
                {...props} 
                exact path="/" 
                render={matchprops => (
                    <Suspense fallback={<h1>Cargando</h1>}>
                        <LazyBienvenido {...matchprops} {...props} />
                    </Suspense>
                )}
                ></FullPageLayout>
            </Switch>
            <Switch>
                <MenuPageLayout 
                {...props} 
                exact path="/vuelos" 
                render={matchprops => (
                    <Suspense fallback={<h1>Cargando</h1>}>
                        <LazyFormulario {...matchprops} {...props} />
                    </Suspense>
                )}
                ></MenuPageLayout>
            </Switch>
            <Switch>
                <MenuPageLayout 
                {...props} 
                exact path="/aviones" 
                render={matchprops => (
                    <Suspense fallback={<h1>Cargando</h1>}>
                        <LazyAviones {...matchprops} {...props} />
                    </Suspense>
                )}
                ></MenuPageLayout>
            </Switch>
            <Switch>
                <MenuPageLayout 
                {...props} 
                exact path="/destinos" 
                render={matchprops => (
                    <Suspense fallback={<h1>Cargando</h1>}>
                        <LazyDestino {...matchprops} {...props} />
                    </Suspense>
                )}
                ></MenuPageLayout>
            </Switch>
            <Switch>
                <MenuPageLayout 
                {...props} 
                exact path="/asientos" 
                render={matchprops => (
                    <Suspense fallback={<h1>Cargando</h1>}>
                        <LazyAsiento {...matchprops} {...props} />
                    </Suspense>
                )}
                ></MenuPageLayout>
            </Switch>
            
        </Router>)
}

export default AppRouter