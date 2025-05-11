/**
 * Utility function to scroll to a section based on hash in URL
 */
export const scrollToSection = () => {
  // Get the hash from the URL
  const hash = window.location.hash;
  
  // If there's a hash, find the element and scroll to it
  if (hash) {
    // Remove the # character
    const id = hash.substring(1);
    const element = document.getElementById(id);
    
    if (element) {
      // Add a small delay to ensure the page has fully loaded
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  } else {
    // If no hash, scroll to top
    window.scrollTo(0, 0);
  }
};
