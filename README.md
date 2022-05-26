# get-safe-area-capacitor

Retrieves the safe area insets

## Install

```bash
npm install get-safe-area-capacitor
npx cap sync
```

## API

<docgen-index>

* [`GetSafeArea()`](#Getsafearea)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### GetSafeArea()

```typescript
GetSafeArea() => Promise<{ top: number; bottom: number; left: number; right: number; }>
```

**Returns:** <code>Promise&lt;{ top: number; bottom: number; left: number; right: number; }&gt;</code>

--------------------

</docgen-api>

## Example
```javascript
import { GetSafeArea } from 'get-safe-area-capacitor'
import { StatusBar } from '@capacitor/status-bar';

if(Capacitor.getPlatform() == "android")
    await StatusBar.setOverlaysWebView({ overlay: true });

GetSafeArea().then((e) => {
    document.body.style.marginTop = `${e.top}px`; 
})
```
## Notes
1. Remember to add `<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">` to your head.
1. Remember to set the content to go underneath the status bar on android.
