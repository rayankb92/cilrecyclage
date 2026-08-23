const GOOGLE_ADS_ID = "AW-18393536721";
const GOOGLE_ADS_CALL_CONVERSION = "AW-18393536721/f6pKCNa8yuYcENGx3MJE";

export function GoogleAdsTag() {
  return (
    <>
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GOOGLE_ADS_ID}');
            window.gtag_report_conversion = function gtag_report_conversion(url) {
              var callback = function () {
                if (typeof(url) != 'undefined') {
                  window.location = url;
                }
              };
              gtag('event', 'conversion', {
                'send_to': '${GOOGLE_ADS_CALL_CONVERSION}',
                'value': 1.0,
                'currency': 'EUR',
                'event_callback': callback
              });
              return false;
            };
          `,
        }}
      />
    </>
  );
}
