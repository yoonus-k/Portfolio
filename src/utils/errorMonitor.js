/**
 * Utility functions for monitoring WebGL and Three.js errors
 */

// Monitor for WebGL context loss events
export const setupWebGLErrorMonitoring = () => {
  try {
    // Listen for webglcontextlost events on all canvas elements
    document.querySelectorAll('canvas').forEach(canvas => {
      canvas.addEventListener('webglcontextlost', (event) => {
        console.warn('WebGL context lost:', event);
        
        // Prevent the default behavior which would halt rendering
        event.preventDefault();
        
        // Attempt to restore the context after a short delay
        setTimeout(() => {
          try {
            // For Three.js canvases, the renderer typically has a forceContextRestore method
            const renderer = canvas.__threeRenderer;
            if (renderer && typeof renderer.forceContextRestore === 'function') {
              renderer.forceContextRestore();
              console.log('Context restoration attempted');
            }
            
            // Dispatch an event that the component can listen for
            canvas.dispatchEvent(new CustomEvent('contextrestorationattempted'));
          } catch (err) {
            console.error('Error during context restoration attempt:', err);
          }
        }, 1000);
      });
      
      // Also listen for successful context restoration
      canvas.addEventListener('webglcontextrestored', (event) => {
        console.log('WebGL context restored:', event);
      });
    });
    
    console.log('WebGL error monitoring set up successfully');
  } catch (error) {
    console.error('Error setting up WebGL error monitoring:', error);
  }
};

// Function to check if WebGL is supported and functioning
export const checkWebGLSupport = () => {
  try {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    
    if (!gl) {
      console.warn('WebGL not supported');
      return false;
    }
    
    // Check for any WebGL context flags that might indicate problems
    const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
    if (debugInfo) {
      const vendor = gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL);
      const renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
      console.log('WebGL vendor:', vendor);
      console.log('WebGL renderer:', renderer);
    }
    
    return true;
  } catch (error) {
    console.error('Error checking WebGL support:', error);
    return false;
  }
};
