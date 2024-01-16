import { useAuth0 } from '@auth0/auth0-react';

// Functional component for displaying user profile information
const Profile = () => {
    // Destructuring properties from the useAuth0 hook
    const { user, isAuthenticated } = useAuth0();

    // Rendering the user profile information if the user is authenticated
    return (
        isAuthenticated && (
            <article className='column-profile'>
                {/* User details section */}
                <div className="user-details">
                    {/* Displaying user profile picture if available */}
                    {user && user.picture && <img src={user.picture} alt={user?.name} />}

                    
                    {/* Displaying user name */}
                    <h2 className='profile-name'>{user?.name}</h2>
                    
                    {/* Displaying user email */}
                    <p className='profile-email'>{user?.email}</p>
                </div>
            </article>
        )
    )
}

// Exporting the Profile component as the default export
export default Profile;
