import React, {Suspense, lazy} from "react";
import { Router, Switch} from "react-router-dom";

import FullPageLayout from "../../layout/FullPageLayout";
import MenuPageLayout from "../../layout/MenuPageLayout";
import UserPageLayout from "../../layout/UserPageLayout";
import history from "../../utility/History";


const LazyHome = lazy(() => import ("../../page/home/home"));
const LazyBienvenido = lazy(() => import("../../page/bienvenido/Bienvenido"));
const LazyFormulario = lazy(() => import("../../page/home/Formulario"));
const LazyAviones = lazy(() => import("../../page/aviones/Aviones"));
const LazyDestino = lazy(() => import("../../page/destinos/Destinos"));
const LazyAsiento = lazy(() => import("../../page/Asientos/Asientos"));
const LazyUser = lazy(() => import("../../page/user/FormularioInicio"));
const LazyReservacion = lazy(() => import("../../page/reservaciones/Reservacion"));
const Lazyfact= lazy(() => import("../../page/fact/Payment"));
const LazyMyReservacion= lazy(() => import("../../page/misReservaciones/MiReservacion"));


const AppRouter = (props) => {
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
            <Switch>
                <UserPageLayout 
                {...props} 
                exact path="/inicio" 
                render={matchprops => (
                    <Suspense fallback={<h1>Cargando</h1>}>
                        <LazyUser {...matchprops} {...props} />
                    </Suspense>
                )}
                ></UserPageLayout>
            </Switch>
            <Switch>
                <UserPageLayout 
                {...props} 
                exact path="/reservacion" 
                render={matchprops => (
                    <Suspense fallback={<h1>Cargando</h1>}>
                        <LazyReservacion {...matchprops} {...props} />
                    </Suspense>
                )}
                ></UserPageLayout>
            </Switch>
            <Switch>
                <UserPageLayout 
                {...props} 
                exact path="/payment" 
                render={matchprops => (
                    <Suspense fallback={<h1>Cargando</h1>}>
                        <Lazyfact {...matchprops} {...props} />
                    </Suspense>
                )}
                ></UserPageLayout>
            </Switch>
            <Switch>
                <UserPageLayout 
                {...props} 
                exact path="/MisReservaciones" 
                render={matchprops => (
                    <Suspense fallback={<h1>Cargando</h1>}>
                        <LazyMyReservacion {...matchprops} {...props} />
                    </Suspense>
                )}
                ></UserPageLayout>
            </Switch>
            
        </Router>)
}

export default AppRouter