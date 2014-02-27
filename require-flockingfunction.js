/**
 * Set custom flocking behaviour
 */
setCustomFlocking = function () {
    appData.flockingUpdateFunction = function ( boid ) {
        var vector = new THREE.Vector3( 0,0,0 );

        vector
            .add( Cohesion( boid ) )
            .add( Separation( boid ) )
            .add( Alignment( boid ) )
            .add( AvoidBuildings( boid ) )
        ;

        if ( appData.isAvoidMouse ) {
            vector.add( AvoidMouse( boid ) );
        }

        if ( appData.isTendMouse && !appData.isLeader ) {
            vector.add( TendMouse( boid ) );
        }

        if ( appData.isLeader ) {
            vector.add( TendLeader( boid ) );
        }

        return vector;
    };
};