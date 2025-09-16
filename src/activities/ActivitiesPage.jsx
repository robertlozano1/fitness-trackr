import useQuery from "../api/useQuery";

/**
 * ActivitiesPage fetches and displays a list of activities from the API.
 * All users can see the list, even if not logged in.
 */
export default function ActivitiesPage() {
  // Use useQuery to fetch activities from the API
  const {
    data: activities,
    loading,
    error,
  } = useQuery("/activities", "activities");

  return (
    <>
      <h1>Activities</h1>
      {/* Show loading message while fetching data */}
      {loading && <p>Loading activities...</p>}
      {/* Show error message if something goes wrong */}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {/* Show the list of activities if available */}
      {activities && (
        <ul>
          {activities.map((activity) => (
            <li key={activity.id}>
              <strong>{activity.name}</strong>: {activity.description}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
