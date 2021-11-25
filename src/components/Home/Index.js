import React, { Fragment } from "react";

function Index() 
{
    return(
        <Fragment>
            <div className="container">
                <h1>Hola Mundo</h1>

                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <div className="d-grid gap-2">
                            <button className="btn btn-primary" type="button">Button</button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export { Index };