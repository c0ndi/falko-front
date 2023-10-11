export const GA_TRACKING_ID = "G-9YWKG3KQE9" //replace it with your measurement id

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string) => {
    // @ts-ignore
    window.gtag("config", GA_TRACKING_ID, {
        page_path: url,
    })
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({action, category, label, value }: {
    action: string,
    category: string,
    label: string,
    value: number
}) => {
    // @ts-ignore
    window.gtag("event", action, {
        event_category: category,
        event_label: label,
        value: value,
    })
}