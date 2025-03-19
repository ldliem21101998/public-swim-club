/** @format */

import { Routes, Route } from "react-router-dom";
import PublicLayout from "./PublicLayout";
import PublicRoutes from "../utils/routes/public";

import { useState } from "react";

const DefaultLayout = () => {
  //Routes
  const showPublicMenu = (routes) => {
    var result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            element={route.main()}
            exact={route.exact}
          ></Route>
        );
      });
    }
    return result;
  };

  //   const showPrivateMenu = (routes) => {
  //     var result = null;
  //     if (routes.length > 0) {
  //       result = routes.map((route, index) => {
  //         return (
  //           <Route
  //             key={index}
  //             path={route.path}
  //             element={
  //               <ProtectedRoute
  //                 isAllowed={
  //                   user
  //                     ? route.role
  //                       ? route.role.includes(user.role)
  //                       : false
  //                     : false
  //                 }
  //                 redirectPath={`../${path.NOTAUTH}`}
  //               >
  //                 {route.main()}
  //               </ProtectedRoute>
  //             }
  //             exact={route.exact}
  //           ></Route>
  //         );
  //       });
  //     }
  //     return result;
  //   };

  return (
    <Routes>
      <Route element={<PublicLayout />}>
        {showPublicMenu(PublicRoutes)}
        {/* <Route
          path={path.LOGIN}
          element={<Login onSetUser={handeSetUser} />}
          exact={true}
        /> */}
      </Route>

      {/* <Route
        element={
          <ProtectedRoute
            isAllowed={user ? allowedRoles.includes(user.role) : false}
          >
            <PrivateLayout />
          </ProtectedRoute>
        }
      >
        <Route path={`${path.NOTAUTH}`} element={<NotAuthorizePage />} />
        {showPrivateMenu(PrivateRoutes)}
      </Route> */}
    </Routes>
  );
};

export default DefaultLayout;
