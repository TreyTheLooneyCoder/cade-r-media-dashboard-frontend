export const dashData = async () => {
    const response = await fetch("https://cadersmdashboardjson.blob.core.windows.net/social-media-dashboard-assignment/MediaDashboardData.json");
    const data = await response.json();
    return data;
}