import { useRef, useEffect } from 'react'

import './preview.css'

interface PreviewProps {
  code: string
  err: string
}

const html = `
		<html>
			<head>
			<style>html { background-color: #fff; }</style>
			</head>
			<body style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; margin: 0;">
				<div id="root"></div>
				<script>
				const handleError = (err) => {
					const root = document.getElementById('root')
					root.innerHTML = '<div style="color: red; font-size: 15px; line-height: 20px; font-family: Arial, Helvetica, sans-serif; font-weight: 400;"><h4>Runtime Error</h4>' + err + '</div>'
					console.error(err)
				}
					window.addEventListener('error', (event) => {
						event.preventDefault()
						handleError(event.error)
					})
				
					window.addEventListener('message', (event) => {
						try {
							eval(event.data)
						} catch (err) {
							handleError(err)
						}
					}, false)
				</script>
			</body>
		</html>
	`

const Preview: React.FC<PreviewProps> = ({ code, err }) => {
  const iframe = useRef<any>()

  useEffect(() => {
    iframe.current.srcdoc = html
    setTimeout(() => {
      iframe.current.contentWindow.postMessage(code, '*')
    }, 50)
  }, [code])

  return (
    <div className="preview-wrapper">
      <iframe
        title="preview"
        ref={iframe}
        sandbox="allow-scripts"
        srcDoc={html}
      />
      {err && (
        <div className="preview-error">
          <h4>Bundling Error</h4>
          {err}
        </div>
      )}
    </div>
  )
}

export default Preview
