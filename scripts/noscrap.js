window.__conversions_settings = {"forms":true,"links":[],"external":false,"links_enabled":true,"not_traced_links":[]};

	function iCopyKeenEvent( name, properties )
	{
		var params_copy = window.__keen_io_called_parameters.slice();
		var data = {};
		properties = properties || {};

		for( i in params_copy[ 2 ] )
		{
			if( params_copy[ 2 ].hasOwnProperty( i ) )
			{
				data[ i ] = params_copy[ 2 ][ i ];
			}
		}

		for( i in properties )
		{
			if( properties.hasOwnProperty( i ) )
			{
				data[ i ] = properties[ i ];
			}
		}

		if( name === 'conversion' && window.__unique )
		{
			if( window.__unique.isVisited() )
			{
				data[ 'responsive_mode' ] = window.__unique.isResponsiveMode() ? 'mobile' : null;
			}
		}


		params_copy.splice( 1, 2, name, data );
		return params_copy;
	}

	function removeKeenEventParameter( name )
	{
		if( window.__keen_io_called_parameters ) {
			var parameters = window.__keen_io_called_parameters[2] ? window.__keen_io_called_parameters[2] : {};

			if( parameters[name] )
			{
				delete parameters[name];
				window.__keen_io_called_parameters[2] = parameters;
			}
		}
	}

	function iEncodePixelUrl( id, event, data, key )
	{
		var endpoint = "anthill.instapage.com" + '/projects/' + id + '/events/' + event;
		var base64 = window.base64_encode( JSON.stringify( data ) );
		var base64_url_safe = base64.replace(/\+/g, '-').replace(/\//g, '_');
		var query = 'api_key=' + key + '&data=' + base64_url_safe + '&t=' + Date.now();
		var image_url = '//' + endpoint + '?' + query;

		return image_url;
	}

	function iCreateTrackingPixel( src )
	{
		return ijQuery( '<img>')
			.attr( {
				src: src,
				width: 1,
				height: 1,
				alt: '',
				title: '',
				style: 'display: table-cell; height: 0; position: absolute; left: -9999999px; top: -999999px;'
			} )
	}

	ijQuery( document ).on( 'ready', function()
	{
		var cookie_name = 'instapage-visit-11138351';
		var parameters = {"owner_id":2816811,"customer_id":3150606,"user_id":2816811,"page_id":11138351,"published_version":34,"quantity":1,"static_page":false,"variation_name":"A","variation_id":1,"linked_variation_id":2,"initial_responsive_mode":null,"visitor_ip":"104.198.128.129","useragent":""};
		var id = '11138351';
		var track_returning_visitors = true;

		var project_id = '56c2f3d796773d0a7e96a536';
		var event = 'visit';
		var key = 'f61769f0bd2b34908555e5b9dd7d68d6207dbf24965625aa312e9aa29bf1957e824bfc1a92405f86d13b20592779df7e38301ee124ce763938684c0800492162d00799492ca6d304ae1e401b3020c0907dddc4119a8a60500e1d3dca7a2baaee5fee642207badb89d0283464bc08df2dfc88ad88bec41d3ead411c78e469341acace94493a36e3f48101fa8e03492831';

		parameters.javascript = true;
		parameters.variation = parameters.variation_name;
		parameters.generation_time = '17';
		parameters.responsive_mode = null;

		if( window.__mobile_version === 2 && window.innerWidth < 600 && window.__variant.indexOf( '-mobile' ) < 0 )
		{
			window.__variant += '-mobile';
			parameters.responsive_mode = 'mobile';
		}
		else if( window.__variant.indexOf( '-mobile' ) > 0 )
		{
			parameters.responsive_mode = 'mobile';
		}

		window.__unique = new InstapageUniqueVisit( cookie_name, {
			variant: parameters.variation_name,
			responsive_mode: parameters.responsive_mode,
			reset: {}		} );

		parameters.visited = window.__unique.isVisited();
		parameters.useragent = window.navigator && window.navigator.userAgent || parameters.useragent;

		parameters.campaign_id = window.__unique.getCampaignId();
		parameters.ad_id = window.__unique.getAdId();
		parameters.campaign_source = window.__unique.getCampaignSource();

		parameters.ref = window.__unique.getRef();

		window.__keen_io_called_parameters = [ project_id, event, parameters, key ];
		if( !parameters.visited || track_returning_visitors )
		{
			// iCreateTrackingPixel( iEncodePixelUrl( project_id, event, parameters, key ) )
			// 	.appendTo( ijQuery( 'body' ) );

			window.__unique.setResponsiveMode( parameters.responsive_mode );
			window.__unique.setVisited();
			window.__unique.save();

			//Remove ad_id parameter for multiple submit protection
			removeKeenEventParameter( 'ad_id' );
		}

		if( window.__conversions_settings.external && typeof $.cookie( 'instapage.conversion' + id ) === 'undefined' )
		{
			var parameter_pixel = iCopyKeenEvent( "conversion", {
				conversion_type: "external",
				visited: window.__unique.isConverted()
			} );
			var external_image = iEncodePixelUrl.apply( iEncodePixelUrl, parameter_pixel );

			var data = {
				page_id: id,
				variation: parameters.variation_name,
				external_image: external_image,
				timestamp_created: Date.now(),
				timestamp_sent: null
			};

			$.cookie( 'instapage.conversion' + id, JSON.stringify( data ), {
				expires: 7,
				path: '/'
			} );
		}
	} );


	function getWidgetsHorizontalBoundries()
			{
					var $body;
					var page_width;
					var edges = { left: 0, right: 0 };

					$body = ijQuery( 'html, body' );
					page_width = ijQuery( '.block-inner' ).first().width();

					ijQuery( '.page-element:visible' ).each( function( index, elem )
					{
							var $elem = ijQuery( elem );
							var left = $elem.position().left;
							var width = $elem.width();
							var right = left + width;
							if ( left < 0 && edges.left > left )
							{
									edges.left = left;
							}

							if ( right > page_width && edges.right < right )
							{
									edges.right = right;
							}
					} );

					max = Math.max( Math.abs( edges.left ), edges.right - page_width );
					return page_width + max * 2;
			}
			window.__workspaceWidth = getWidgetsHorizontalBoundries();

			ijQuery( document ).ready( function()
				{
					var $window = ijQuery( window );
					var last_window_width;

					function setupScroll()
					{
						var window_width = $window.width();
						var $body;
						var page_width;
						var edges = { left: 0, right: 0 };
						var max;
						var width;
						var scroll_left = 0;

						if ( last_window_width !== window_width )
						{
							$body = ijQuery( 'html, body' );

							if ( window.__workspaceWidth > window_width && window_width > 400 )
							{
								scroll_left = Math.round( ( window.__workspaceWidth - window_width ) / 2 );
								$body.css( 'min-width', window.__workspaceWidth + 'px' );
								ijQuery( 'html' ).css( 'overflow-x', 'visible' );
								$body.scrollLeft( scroll_left );
							}
							else
							{
								$body.css( 'min-width', '' );
								$body.scrollLeft( 0 );
								ijQuery( 'html' ).css( 'overflow-x', 'hidden' );
							}

							last_window_width = window_width;
						}
					}

					setupScroll();

					$window
						.off( 'resize.horizontalScrollHandler' )
						.on( 'resize.horizontalScrollHandler', setupScroll );
				} );