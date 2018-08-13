setTimeout(function()
				{
					"use strict";
					try
					{
						var body = document.body;
						var html = document.documentElement;
						var height = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );

						html.style.setProperty( 'height', height + 'px' );
					}
					catch( e )
					{
					}
				}, 1 );