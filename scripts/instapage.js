window.__page_id = 11138351;
			window.__version = 34;
			window.__variant = 'A';
			window.__variant_custom_name = 'Variation A - All Features' || 'A';
			window.__is_tablet = false;
			window.__page_domain = '//www.muuktest.com';
			window.__instapage_services = '//app.instapage.com';
			window.__instapage_proxy_services = 'PROXY_SERVICES';
			window.__preview = false;
			window.__facebook = false;
			window.__page_type = 2;
			window.__mobile_version = 2;
			window.__variant_hash = "607cef71dbdcd8bbf6c8cb4881db169d3ba6a9b0";
			window.__predator_throttle = 10;
			window.__predator_blacklist = [];
			
							window.__instapage_submission_endpoint = '//d.fastcdn.co/submissions';
			
			var page_version = 34;

			var _Translate = new Translate();

			if( ijQuery === 'undefined' )
			{
				var ijQuery = jQuery;
			}

			window.__recaptchaError = function()
			{
				console.error( 'ReCaptcha invalid site key' );
				window.__reCaptchaCorrupted = true;
			};

			window.__removeReCaptchaClasses = function()
			{
				var challengeContainer = document.querySelector( 'iframe[src*="recaptcha"]' );
				var htmlDocument = document.querySelector( 'html' );
				htmlDocument.classList.remove( 'hasRecaptcha' );
				if( challengeContainer && challengeContainer.parentNode ) {
					challengeContainer.parentNode.classList.remove( 'recaptchaContainer' );
					challengeContainer.parentNode.parentNode.classList.remove( 'recaptchaWrapper' );
				}
			}

			window.__changeReCaptchaChallengePosition = function()
			{
				var challengeContainer = document.querySelector( 'iframe[src*="recaptcha/api2/bframe"]' );

				if ( challengeContainer && challengeContainer.parentNode )
				{
					try
					{
						var isSafari = navigator.vendor && navigator.vendor.indexOf( 'Apple' ) > -1 &&
                        navigator.userAgent && !navigator.userAgent.match( 'CriOS' );

         		var isiOS = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);

						if(isSafari && isiOS) {
							var interval = setInterval(function() {
								var currentContainer = document.querySelector( 'iframe[src*="recaptcha/api2/bframe"]' );

								if ( !currentContainer ) {
									clearInterval(interval);
									return;
								}

								var challengeContainerWrapper = currentContainer.parentNode;
								var isContainerVisible = challengeContainerWrapper && challengeContainerWrapper.parentNode.style.visibility === 'visible';

								if (isContainerVisible) {
									var htmlDocument = document.querySelector('html');
									htmlDocument.classList.add('hasRecaptcha');
									currentContainer.parentNode.classList.add('recaptchaContainer');
									currentContainer.parentNode.parentNode.classList.add('recaptchaWrapper');

									clearInterval(interval);
								}
							}, 300);
						}

						challengeContainer.parentNode.style.position = 'fixed';
						challengeContainer.parentNode.style.margin = '0 auto';
					}
					catch( e )
					{
					}
				}
			}

			window.__reCaptchaTrigger = function( token )
			{
				_form_controller.onRecaptchaFormSubmit( token );
				window.__removeReCaptchaClasses();
			};

			ijQuery(document).ready(function()
			{
				window._Mobile_helper = new MobileHelper();
				window._Mobile_helper.initViewport( 960, true );

				try
				{
					ijQuery('input, textarea').placeholder();
				}
				catch( e )
				{
				}
			});

			ijQuery( window ).load( function()
			{
				var notification_loader;

								ijQuery( 'body' ).hide().show();

								notification_loader = ijQuery( '.notification-loader' );
				notification_loader.attr( 'src', notification_loader.attr( 'rel' ) );
			});

			_Translate.set( "Problem loading google map", "Problem loading google map" );

			is_new_mobile_visible = function()
			{
				if( !window.matchMedia )
				{
					return false;
				}
				return window.matchMedia('screen and (max-width: 620px), screen and (max-width: 999px) and (-webkit-min-device-pixel-ratio: 1.5)').matches;
			}