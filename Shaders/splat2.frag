uniform vec2 uPoint;
uniform vec3 uColor;
uniform float uRadius;
uniform float uAspectRatio;
uniform vec2 uPoint1;
uniform vec2 uPoint2;
uniform vec2 uPoint3;
uniform vec2 uPoint4;
uniform vec2 uPoint5;
uniform vec2 uPoint6;
uniform vec3 uColor1;
uniform vec3 uColor2;
uniform vec3 uColor3;
uniform vec3 uColor4;
uniform vec3 uColor5;
uniform vec3 uColor6;


out vec4 fragColor;
void main()
{
	vec2 p = vUV.xy - uPoint;
	vec2 p1 = vUV.xy - uPoint1;
	vec2 p2 = vUV.xy - uPoint2;
	vec2 p3 = vUV.xy - uPoint3;
	vec2 p4 = vUV.xy - uPoint4;
	vec2 p5 = vUV.xy - uPoint5;
	vec2 p6 = vUV.xy - uPoint6;

	p.x *= uAspectRatio;
	p1.x *= uAspectRatio;
	p2.x *= uAspectRatio;
	p3.x *= uAspectRatio;
	p4.x *= uAspectRatio;
	p5.x *= uAspectRatio;
	p6.x *= uAspectRatio;

	vec3 splat = exp(-dot(p, p) / uRadius) * uColor;
	vec3 splat1 = exp(-dot(p1, p1) / uRadius) * uColor1;
	vec3 splat2 = exp(-dot(p2, p2) / uRadius) * uColor2;
	vec3 splat3 = exp(-dot(p3, p3) / uRadius) * uColor3;
	vec3 splat4 = exp(-dot(p4, p4) / uRadius) * uColor4;
	vec3 splat5 = exp(-dot(p5, p5) / uRadius) * uColor5;
	vec3 splat6 = exp(-dot(p6, p6) / uRadius) * uColor6;

	vec3 base = texture(sTD2DInputs[0], vUV.st).xyz;

	vec4 color = vec4(base + splat + splat1 + splat2 + splat3 + splat4 + splat5 + splat6, 1.0);

	fragColor = TDOutputSwizzle(color);
}
