const readline = require( 'readline' );
const readline1 = readline.createInterface( {
    input: process.stdin,
    output: process.stdout,
} )

var books = [ 'To Kill a Mockingbird  by  Harper Lee', 'The Great Gatsby  by  F. Scott Fitzgerald', 'One Hundred Years of Solitude  by  Gabriel García Márquez', 'A Passage to India  by  E.M. Forster', 'Invisible Man  by  Ralph Ellison' ];

function recursion ()
{
    readline1.question( "Press 1 (Show all books), 2 (Add a new book) or 3 (Quit) : ", function ( numberOption )
    {
        // console.log( 'numberOption: ', numberOption );
        if ( numberOption == 1 )
        {
            // console.log( books );
            books.map( ( el ) => { console.log( el ); } )

            return recursion();
        } else if ( numberOption == 2 )
        {
            readline1.question( "Please add a name of the book: ", function ( name )
            {
                // console.log( name );
                books.push( name );
                console.log( 'Book added succefully' );
                books.map( ( el ) => { console.log( el ); } )
                return recursion();
            } )
        } else if ( numberOption == 3 )
        {
            readline1.question( "Are you sure you want to quit ? - press Y to quit: ", function ( ans )
            {
                if ( ans == 'Y' )
                {
                    console.log( "Bye Bye" );
                    readline1.close()
                }
            } )
        } else
        {
            console.log( "You have selected an invalid entry so please press 1, 2 or 3" )
            return recursion();
        }
    } )
}

recursion();