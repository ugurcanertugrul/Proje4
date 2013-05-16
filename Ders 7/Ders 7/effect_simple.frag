#version 120

uniform sampler2D fbo_texture;
uniform sampler2D renk;
varying vec2 f_texcoord;

void main(void) {
    vec2 texcoord = f_texcoord;
	vec3 InColor = texture2D(fbo_texture, texcoord).xyz;
	vec3 OutColor;
	OutColor.r = texture2D(renk, vec2(InColor.r, 1)).r;
	OutColor.g = texture2D(renk, vec2(InColor.g, 1)).g;
	OutColor.b = texture2D(renk, vec2(InColor.b, 1)).b;

    gl_FragColor = vec4(OutColor, 1);
}