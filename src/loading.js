const Loading = () => {
    return (
        <svg width="200px" height="200px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" class="lds-double-ring" style="background: none;">
            <circle cx="50" cy="50" ng-attr-r="{{config.radius}}" ng-attr-stroke-width="{{config.width}}" ng-attr-stroke="{{config.c1}}"
                ng-attr-stroke-dasharray="{{config.dasharray}}" fill="none" stroke-linecap="round" r="30" stroke-width="3" stroke="#1d3f72"
                stroke-dasharray="47.12388980384689 47.12388980384689" transform="rotate(290.292 50 50)"><animateTransform attributeName="transform"
                    type="rotate" calcMode="linear" values="0 50 50;360 50 50" keyTimes="0;1" dur="2.2s" begin="0s" repeatCount="indefinite">
                </animateTransform>
            </circle>
            <circle cx="50" cy="50" ng-attr-r="{{config.radius2}}" ng-attr-stroke-width="{{config.width}}" ng-attr-stroke="{{config.c2}}"
                ng-attr-stroke-dasharray="{{config.dasharray2}}" ng-attr-stroke-dashoffset="{{config.dashoffset2}}" fill="none" stroke-linecap="round"
                r="26" stroke-width="3" stroke="#5699d2" stroke-dasharray="40.840704496667314 40.840704496667314" stroke-dashoffset="40.840704496667314"
                transform="rotate(-290.292 50 50)"><animateTransform attributeName="transform" type="rotate" calcMode="linear" values="0 50 50;-360 50 50"
                    keyTimes="0;1" dur="2.2s" begin="0s" repeatCount="indefinite"></animateTransform>
            </circle>
        </svg>
    )
}
export default Loading;
