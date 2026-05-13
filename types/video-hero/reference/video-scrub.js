                <p style="font-size:12px;color:var(--tx3);line-height:1.5;margin-top:12px;text-align:center">Отправляя форму, вы соглашаетесь с <a href="/privacy.html" target="_blank" style="color:var(--tx2);text-decoration:underline;text-underline-offset:2px">политикой обработки персональных данных</a>.</p>
                <div class="modal-msg" id="lead-msg"></div>
            </form>
        </div>
        <div class="modal-done" id="lead-done" style="display:none">
            <h3>Спасибо!</h3>
            <p>Заявка получена. Свяжемся с вами в течение 2 дней.</p>
            <button type="button" class="modal-submit" onclick="document.getElementById('lead-close').click()" style="margin-top:20px">Закрыть</button>
        </div>
    </div>
</div>

<!-- Lenis smooth scroll -->
<script src="https://unpkg.com/lenis@1.1.18/dist/lenis.min.js"></script>
<!-- GSAP -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>

<script>
gsap.registerPlugin(ScrollTrigger);

// ===== LENIS: buttery smooth scroll =====
const lenis = new Lenis({
    duration: 0.8,        // snappier — less lag on content sections
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smooth: true,
    smoothTouch: false,
});

// Connect Lenis to GSAP ScrollTrigger
lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add((time) => { lenis.raf(time * 1000); });
gsap.ticker.lagSmoothing(0);

// ===== VIDEO SCRUBBING =====
const vid = document.getElementById('heroVid');
const overlay = document.getElementById('cinemaOverlay');
const heroContent = document.getElementById('cinemaHero');
const caption = document.getElementById('cinemaCaption');
const nav = document.getElementById('mainNav');

let targetTime = 0;
let smoothTime = 0;

vid.pause();

// Smooth rAF loop — interpolates towards target with double-lerp for extra smoothness
function tick() {
    // Two-stage lerp: fast approach + slow settle
    const diff = targetTime - smoothTime;
    smoothTime += diff * 0.06; // cinematic ease — lower = smoother

    // Snap when very close to avoid infinite micro-seeks
    if (Math.abs(diff) < 0.002) {
        smoothTime = targetTime;
    }

    // Only update video when meaningful change
    if (Math.abs(vid.currentTime - smoothTime) > 0.01) {
        vid.currentTime = smoothTime;
    }

    requestAnimationFrame(tick);
}

function initVideoScroll() {
    vid.currentTime = 0.001;
    smoothTime = 0.001;
    targetTime = 0.001;

    requestAnimationFrame(tick);

    ScrollTrigger.create({
        trigger: '.cinema',
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
        onUpdate: (self) => {
            const p = self.progress;
            const dur = vid.duration;

            if (dur && isFinite(dur)) {
                targetTime = Math.max(0.001, Math.min(p * dur, dur - 0.05));
            }

            // Hero text fades
            const heroOp = p < 0.15 ? 1 : Math.max(0, 1 - (p - 0.15) / 0.12);
            heroContent.style.opacity = heroOp;
            heroContent.style.transform = 'translateY(' + (p * -80) + 'px)';
            heroContent.style.pointerEvents = heroOp < 0.1 ? 'none' : 'auto';

            // Overlay
            overlay.style.opacity = 0.55 + p * 0.2;

            // Caption
            if (p > 0.4 && p < 0.85) {
                caption.classList.add('vis');
            } else {
                caption.classList.remove('vis');
            }
        }
    });
}

// Init: download the entire video file as bytes via XHR (more
// predictable progress on Netlify HTTP/2 than fetch().blob()), then
